"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Search, Filter, ChevronDown, MoreHorizontal, SortAsc, SortDesc } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

// Lazily load non-critical icons to reduce initial bundle
const Icons = {
  Download: dynamic(() => import("lucide-react").then(m => ({ default: m.Download }))),
  Star: dynamic(() => import("lucide-react").then(m => ({ default: m.Star }))),
  Eye: dynamic(() => import("lucide-react").then(m => ({ default: m.Eye }))),
  Clock: dynamic(() => import("lucide-react").then(m => ({ default: m.Clock }))),
  Shield: dynamic(() => import("lucide-react").then(m => ({ default: m.Shield }))),
  CheckCircle2: dynamic(() => import("lucide-react").then(m => ({ default: m.CheckCircle2 }))),
  FileText: dynamic(() => import("lucide-react").then(m => ({ default: m.FileText }))),
  Utensils: dynamic(() => import("lucide-react").then(m => ({ default: m.Utensils }))),
  Coffee: dynamic(() => import("lucide-react").then(m => ({ default: m.Coffee }))),
  Wine: dynamic(() => import("lucide-react").then(m => ({ default: m.Wine }))),
  Hotel: dynamic(() => import("lucide-react").then(m => ({ default: m.Hotel }))),
  TrendingUp: dynamic(() => import("lucide-react").then(m => ({ default: m.TrendingUp }))),
} as const;

// SaaS-ready analytics hook - production ready
function useResourceTracking(action: string, resource: string) {
  // Production: integrate with Mixpanel, PostHog, etc.
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${action}: ${resource}`);
  }
  
  // Future: Real analytics integration
  // analytics.track(action, { resource, timestamp: Date.now() });
}

// Generic resource interface for scalability
interface BaseResource {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  format?: string;
  downloads?: number;
  rating?: number;
  lastUpdated: string;
  premium: boolean;
  featured: boolean;
  tags: string[];
  href: string;
  author?: string;
  readTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Restaurant-specific resource types
interface RestaurantTemplate extends BaseResource {
  industry: 'Restaurant' | 'Bar' | 'Coffee' | 'Hotel' | 'All';
  complianceLevel?: 'Basic' | 'Advanced' | 'Expert';
}

interface ResourceArticle extends BaseResource {
  readTime: string;
  author: string;
  publishedDate: string;
  views?: number;
}

// Professional table component with enterprise features
interface ResourceTableProps<T extends BaseResource> {
  resources: T[];
  title: string;
  subtitle?: string;
  searchPlaceholder: string;
  categories: string[];
  additionalFilters?: {
    key: keyof T;
    label: string;
    options: string[];
  }[];
  defaultSort?: keyof T;
  showBulkActions?: boolean;
  showMetrics?: boolean;
  onResourceAction?: (action: string, resourceId: string) => void;
  renderCustomCell?: (resource: T, key: string) => React.ReactNode;
}

// Icon mapping for visual consistency
const getCategoryIcon = (category: string) => {
  const iconMap: Record<string, any> = {
    'HACCP': Icons.Shield,
    'Safety': Icons.CheckCircle2,
    'Training': Icons.FileText,
    'Operations': Icons.Utensils,
    'Inventory': Icons.FileText,
    'Compliance': Icons.Eye,
    'Articles': Icons.FileText,
    'Case Studies': Icons.TrendingUp,
    'Templates': Icons.Download,
    'Guides': Icons.FileText,
  };
  return iconMap[category] || Icons.FileText;
};

const getIndustryIcon = (industry: string) => {
  const iconMap: Record<string, any> = {
    'Restaurant': Icons.Utensils,
    'Bar': Icons.Wine,
    'Coffee': Icons.Coffee,
    'Hotel': Icons.Hotel,
    'All': Icons.Utensils,
  };
  return iconMap[industry] || Icons.Utensils;
};

// Utility functions
const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return date.toLocaleDateString();
};

export function ResourceTable<T extends BaseResource>({
  resources,
  title,
  subtitle,
  searchPlaceholder,
  categories,
  additionalFilters = [],
  defaultSort = 'lastUpdated' as keyof T,
  showBulkActions = true,
  showMetrics = true,
  onResourceAction,
  renderCustomCell
}: ResourceTableProps<T>) {
  
  // State management for enterprise features
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [additionalFilterValues, setAdditionalFilterValues] = useState<Record<string, string>>({});
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<keyof T>(defaultSort);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(25);

  useResourceTracking('table_view', title);

  // Advanced filtering and sorting with performance optimization
  const filteredAndSortedResources = useMemo(() => {
    let filtered = resources.filter(resource => {
      // Text search across multiple fields
      const searchFields = [
        resource.title,
        resource.description,
        resource.tags.join(' '),
        resource.author || '',
        resource.category
      ].join(' ').toLowerCase();
      
      const matchesSearch = searchQuery === '' || searchFields.includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
      
      // Additional filters
      const matchesAdditionalFilters = additionalFilters.every(filter => {
        const filterValue = additionalFilterValues[filter.key as string];
        return !filterValue || filterValue === "All" || 
               (resource[filter.key] as string) === filterValue;
      });
      
      // Premium/Featured filters
      const matchesPremium = !showPremiumOnly || resource.premium;
      const matchesFeatured = !showFeaturedOnly || resource.featured;
      
      return matchesSearch && matchesCategory && matchesAdditionalFilters && 
             matchesPremium && matchesFeatured;
    });

    // Sorting with multiple criteria
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      // Handle different data types
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const aStr = aValue.toLowerCase();
        const bStr = bValue.toLowerCase();
        const comparison = aStr.localeCompare(bStr);
        return sortDirection === 'asc' ? comparison : -comparison;
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      if (aValue instanceof Date && bValue instanceof Date) {
        return sortDirection === 'asc' ? 
          aValue.getTime() - bValue.getTime() : 
          bValue.getTime() - aValue.getTime();
      }
      
      // String comparison
      const comparison = String(aValue).localeCompare(String(bValue));
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [
    resources, searchQuery, selectedCategory, additionalFilterValues, 
    showPremiumOnly, showFeaturedOnly, sortBy, sortDirection, additionalFilters
  ]);

  // Pagination
  const paginatedResources = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedResources.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedResources, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSortedResources.length / itemsPerPage);

  // Bulk actions
  const handleSelectAll = () => {
    if (selectedItems.size === paginatedResources.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(paginatedResources.map(r => r.id)));
    }
  };

  const handleSelectItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleBulkAction = (action: string) => {
    useResourceTracking(`bulk_${action}`, `${selectedItems.size} resources`);
    selectedItems.forEach(id => {
      onResourceAction?.(action, id);
    });
    setSelectedItems(new Set());
  };

  const handleSort = (column: keyof T) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('desc');
    }
  };

  const handleFilterChange = (filterKey: string, value: string) => {
    setAdditionalFilterValues(prev => ({
      ...prev,
      [filterKey]: value
    }));
    setCurrentPage(1); // Reset to first page when filtering
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setAdditionalFilterValues({});
    setShowPremiumOnly(false);
    setShowFeaturedOnly(false);
    setCurrentPage(1);
  };

  // Header with sorting
  const SortableHeader = ({ column, children }: { column: keyof T; children: React.ReactNode }) => (
    <TableHead>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 px-2 -ml-2"
        onClick={() => handleSort(column)}
      >
        {children}
        {sortBy === column && (
          sortDirection === 'asc' ? 
            <SortAsc className="ml-2 h-3 w-3" /> : 
            <SortDesc className="ml-2 h-3 w-3" />
        )}
      </Button>
    </TableHead>
  );

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            {showMetrics && (
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{filteredAndSortedResources.length} results</span>
                {selectedItems.size > 0 && (
                  <span>{selectedItems.size} selected</span>
                )}
              </div>
            )}
          </CardTitle>
          {subtitle && (
            <p className="text-muted-foreground">{subtitle}</p>
          )}
        </CardHeader>
        <CardContent>
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              className="pl-9"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            {/* Category Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  {selectedCategory}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {["All", ...categories].map(category => (
                  <DropdownMenuItem 
                    key={category} 
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                  >
                    {category !== "All" && React.createElement(getCategoryIcon(category), { className: "mr-2 h-3 w-3" })}
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Additional Filters */}
            {additionalFilters.map(filter => (
              <DropdownMenu key={filter.key as string}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    {additionalFilterValues[filter.key as string] || filter.label}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{filter.label}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {["All", ...filter.options].map(option => (
                    <DropdownMenuItem 
                      key={option}
                      onClick={() => handleFilterChange(filter.key as string, option)}
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            {/* Premium/Featured Toggles */}
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="premium-filter"
                  checked={showPremiumOnly}
                  onCheckedChange={(checked) => {
                    setShowPremiumOnly(checked === true);
                    setCurrentPage(1);
                  }}
                />
                <label htmlFor="premium-filter" className="text-sm">Premium only</label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="featured-filter"
                  checked={showFeaturedOnly}
                  onCheckedChange={(checked) => {
                    setShowFeaturedOnly(checked === true);
                    setCurrentPage(1);
                  }}
                />
                <label htmlFor="featured-filter" className="text-sm">Featured only</label>
              </div>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedCategory !== "All" || showPremiumOnly || showFeaturedOnly || 
              Object.values(additionalFilterValues).some(v => v && v !== "All")) && (
              <Button variant="outline" size="sm" onClick={clearAllFilters}>
                Clear All Filters
              </Button>
            )}
          </div>

          {/* Bulk Actions */}
          {showBulkActions && selectedItems.size > 0 && (
            <div className="mt-4 p-3 bg-primary/5 rounded-lg border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  {selectedItems.size} item{selectedItems.size > 1 ? 's' : ''} selected
                </span>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => setSelectedItems(new Set())}>
                    Clear Selection
                  </Button>
                  <Button size="sm" onClick={() => handleBulkAction('download')}>
                    <Icons.Download className="h-3 w-3 mr-1" />
                    Download Selected
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                {showBulkActions && (
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={paginatedResources.length > 0 && selectedItems.size === paginatedResources.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                )}
                <SortableHeader column={'title' as keyof T}>Resource</SortableHeader>
                <SortableHeader column={'category' as keyof T}>Category</SortableHeader>
                {additionalFilters.map(filter => (
                  <SortableHeader key={filter.key as string} column={filter.key}>
                    {filter.label}
                  </SortableHeader>
                ))}
                <TableHead>Tags</TableHead>
                {showMetrics && (
                  <>
                    <SortableHeader column={'rating' as keyof T}>Rating</SortableHeader>
                    <SortableHeader column={'downloads' as keyof T}>Downloads</SortableHeader>
                  </>
                )}
                <SortableHeader column={'lastUpdated' as keyof T}>Updated</SortableHeader>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedResources.map((resource) => {
                const CategoryIcon = getCategoryIcon(resource.category);
                
                return (
                  <TableRow key={resource.id}>
                    {showBulkActions && (
                      <TableCell>
                        <Checkbox
                          checked={selectedItems.has(resource.id)}
                          onCheckedChange={() => handleSelectItem(resource.id)}
                        />
                      </TableCell>
                    )}
                    <TableCell>
                      <div className="space-y-2 max-w-sm">
                        <div className="flex items-center gap-2">
                          <Link 
                            href={resource.href}
                            className="font-medium hover:text-primary transition-colors line-clamp-1"
                            onClick={() => useResourceTracking('resource_click', resource.id)}
                          >
                            {resource.title}
                          </Link>
                          <div className="flex items-center gap-1">
                            {resource.featured && (
                              <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                                <Icons.Star className="h-2.5 w-2.5 mr-1" />
                                Featured
                              </Badge>
                            )}
                            {resource.premium && (
                              <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                                Premium
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {resource.description}
                        </p>
                        {resource.author && (
                          <p className="text-xs text-muted-foreground">
                            by {resource.author}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CategoryIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{resource.category}</span>
                      </div>
                    </TableCell>
                    {additionalFilters.map(filter => (
                      <TableCell key={filter.key as string}>
                        {renderCustomCell ? (
                          renderCustomCell(resource, filter.key as string)
                        ) : (
                          <span className="text-sm">
                            {String(resource[filter.key] || '-')}
                          </span>
                        )}
                      </TableCell>
                    ))}
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {resource.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {resource.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{resource.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    {showMetrics && (
                      <>
                        <TableCell>
                          {resource.rating && (
                            <div className="flex items-center gap-1">
                              <Icons.Star className="h-3 w-3" />
                              <span className="text-sm font-medium">{resource.rating}</span>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          {resource.downloads && (
                            <div className="flex items-center gap-1">
                              <Icons.Download className="h-3 w-3 text-muted-foreground" />
                              <span className="text-sm">{formatNumber(resource.downloads)}</span>
                            </div>
                          )}
                        </TableCell>
                      </>
                    )}
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Icons.Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{formatDate(resource.lastUpdated)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={resource.href}>
                              <Icons.Eye className="h-3 w-3 mr-2" />
                              View
                            </Link>
                          </DropdownMenuItem>
                          {resource.downloads !== undefined && (
                            <DropdownMenuItem onClick={() => onResourceAction?.('download', resource.id)}>
                              <Icons.Download className="h-3 w-3 mr-2" />
                              Download
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          
          {/* Empty State */}
          {filteredAndSortedResources.length === 0 && (
            <div className="p-8 text-center">
              <Icons.FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button variant="outline" onClick={clearAllFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedResources.length)} of {filteredAndSortedResources.length} resources
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                    if (pageNum > totalPages) return null;
                    
                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        className="w-8 h-8 p-0"
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="text-muted-foreground">...</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0"
                        onClick={() => setCurrentPage(totalPages)}
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default ResourceTable;
