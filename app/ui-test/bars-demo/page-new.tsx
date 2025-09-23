import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Settings, Users, Shield, BarChart3, Calendar, ExternalLink, ChevronDown, MessageCircle, Wine, Clock, Target, DollarSign } from "lucide-react"

export default function BarsDemo() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Sticky Help Component */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-white rounded-xl shadow-lg border p-6 w-80">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Need Help Getting Started?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Our bar operations experts are standing by to help you implement OpsFlow AI and start seeing results immediately.
        </p>
        <Button className="w-full mb-3 bg-teal-600 hover:bg-teal-700">
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat with Expert
        </Button>
        <Button variant="outline" className="w-full mb-4">
          <ExternalLink className="w-4 h-4 mr-2" />
          Browse Help Center
        </Button>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-gray-600">24/7 live chat support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600">Average response: 2 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-gray-600">Free setup assistance</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm font-medium text-gray-900 mb-2">Additional Resources</p>
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <ExternalLink className="w-3 h-3" />
              Documentation Center
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <ExternalLink className="w-3 h-3" />
              Video Tutorials
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <ExternalLink className="w-3 h-3" />
              Community Forum
            </a>
          </div>
        </div>
      </div>

      {/* Setup Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Process Flow */}
          <div className="relative mb-16">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-white border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-600 font-semibold">
                  1
                </div>
              </div>
              
              {/* Connection Line */}
              <div className="flex-1 h-px bg-gray-300 mx-8 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              
              {/* Step 2 - Highlighted */}
              <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500 font-semibold">
                2
              </div>
              
              {/* Connection Line */}
              <div className="flex-1 h-px bg-gray-300 mx-8"></div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-white border-2 border-teal-500 rounded-full flex items-center justify-center text-teal-600 font-semibold">
                  3
                </div>
              </div>
            </div>
          </div>

          {/* Process Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* System Integration */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl">System Integration</CardTitle>
                  <Badge variant="secondary" className="text-xs">10 minutes</Badge>
                </div>
                <CardDescription className="text-base">
                  Connect your existing POS and inventory systems with zero downtime.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">One-click integration with major POS systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Import existing inventory and staff data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">No disruption to daily operations</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-sm text-gray-500">Step 1 of 3</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Configuration */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl">Custom Configuration</CardTitle>
                  <Badge variant="secondary" className="text-xs">15 minutes</Badge>
                </div>
                <CardDescription className="text-base">
                  Tailor the platform to your bar's unique needs and regulations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Configure drink recipes and portion standards</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Set up local compliance requirements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Customize staff roles and permissions</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-sm text-gray-500">Step 2 of 3</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Training */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl">Team Training & Launch</CardTitle>
                  <Badge variant="secondary" className="text-xs">5 minutes</Badge>
                </div>
                <CardDescription className="text-base">
                  Train your team and launch with full support and guidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Interactive staff training sessions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Mobile app walkthrough for all team members</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Real-time support during first week</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-sm text-gray-500">Step 3 of 3</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Setup Summary */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Setup in Under 30 Minutes</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our streamlined onboarding process gets your restaurant operations optimized quickly with minimal disruption to your workflow.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="text-gray-600">No technical expertise required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="text-gray-600">White-glove onboarding included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Essential Features</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Bar Management Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a profitable, compliant, and efficient bar operation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart Inventory */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Wine className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Smart Inventory Management</CardTitle>
                <CardDescription className="text-base">
                  Real-time tracking of liquor, beer, wine, and supplies with automated reordering.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">Automated par level maintenance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">Real-time pour cost tracking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">Theft and spillage detection</span>
                  </div>
                </div>
                <Button variant="link" className="mt-4 p-0 text-teal-600">
                  Learn more about inventory features →
                </Button>
              </CardContent>
            </Card>

            {/* Staff Scheduling - Highlighted */}
            <Card className="bg-white border-2 border-purple-200 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-teal-600">Staff Scheduling & Management</CardTitle>
                <CardDescription className="text-base">
                  Optimize labor costs with intelligent scheduling based on traffic patterns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">Predictive scheduling based on historical data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">Shift swapping and coverage management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">Performance tracking and tips reporting</span>
                  </div>
                </div>
                <Button variant="link" className="mt-4 p-0 text-teal-600">
                  Explore scheduling tools →
                </Button>
              </CardContent>
            </Card>

            {/* Regulatory Compliance */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Regulatory Compliance</CardTitle>
                <CardDescription className="text-base">
                  Stay compliant with TABC and health regulations through automated monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">Automated compliance check logging</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">ID verification and age tracking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600">Health code violation prevention</span>
                  </div>
                </div>
                <Button variant="link" className="mt-4 p-0 text-teal-600">
                  View compliance features →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge/Solution Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solving Your Biggest Bar Challenges</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Address the most common operational pain points that cost bars time, money, and compliance issues every day.
            </p>
          </div>

          {/* Challenge Focus */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Inventory & Cost Control</h3>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Immediate impact</span>
                  </div>
                  <Badge className="bg-teal-100 text-teal-700 text-xs">Low complexity</Badge>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">
              Eliminate inventory shrinkage and optimize pour costs with intelligent tracking and alerts.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Current Challenge */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-600 text-sm font-bold">!</span>
                    </div>
                    <CardTitle className="text-red-900">Current Challenge</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-red-800">
                    High liquor costs due to over-pouring, theft, and inaccurate inventory tracking leading to 15-25% profit loss.
                  </p>
                </CardContent>
              </Card>

              {/* OpsFlow Solution */}
              <Card className="bg-teal-50 border-teal-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <CardTitle className="text-teal-900">OpsFlow Solution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-teal-800">
                    Automated pour tracking with smart dispensers, real-time inventory monitoring, and AI-powered theft detection algorithms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits and Stats */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Key Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Reduce liquor costs by 18-25% within first month</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Eliminate inventory discrepancies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Automatic alerts for unusual consumption patterns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Integration with existing POS for seamless tracking</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-100 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-teal-900">23%</div>
                  <div className="text-sm text-teal-700">Cost Reduction</div>
                  <div className="text-xs text-teal-600 mt-1">↗ +18% vs. manual tracking</div>
                </div>
                <div className="bg-teal-100 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-teal-900">99.7%</div>
                  <div className="text-sm text-teal-700">Accuracy</div>
                  <div className="text-xs text-teal-600 mt-1">↗ Eliminates human error</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Bar Operations?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of successful bars already using OpsFlow AI to increase profits and ensure compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Start Your Free Trial →
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span>99.9% uptime guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>HACCP compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about implementing OpsFlow AI in your bar.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-teal-100 text-teal-700 text-xs">setup</Badge>
                    <CardTitle className="text-lg">How quickly can we get OpsFlow AI up and running?</CardTitle>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-teal-100 text-teal-700 text-xs">setup</Badge>
                    <CardTitle className="text-lg">Does OpsFlow AI integrate with our current POS system?</CardTitle>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-700 text-xs">features</Badge>
                    <CardTitle className="text-lg">How does the inventory tracking work?</CardTitle>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-700 text-xs">features</Badge>
                    <CardTitle className="text-lg">Can the system help with TABC compliance?</CardTitle>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-teal-100 text-teal-700 text-xs">pricing</Badge>
                    <CardTitle className="text-lg">What's included in the pricing?</CardTitle>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-100 text-purple-700 text-xs">support</Badge>
                    <CardTitle className="text-lg">Do you provide training for our staff?</CardTitle>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Support Stats */}
          <div className="grid grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Questions resolved instantly</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">2min</div>
              <div className="text-sm text-gray-600">Average response time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support availability</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600">Satisfied customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Hero CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <div className="w-8 h-8 bg-teal-500 rounded-lg"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Ready to Revolutionize Your Bar Operations?
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-teal-600">Join 1,000+ Bars Already</span>{" "}
            <span className="text-purple-600">Saving Time and Money</span>
          </h3>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your 30-day free trial today and see why leading bars choose OpsFlow AI to optimize their operations, ensure compliance, and maximize profitability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Start Free Trial →
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-500" />
              <span>TABC Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-teal-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-500" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-teal-500" />
              <span>30-Day Free Trial</span>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="bg-white/80 backdrop-blur border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-6">
              <p className="text-gray-700 italic mb-4">
                "OpsFlow AI transformed our bar operations. We reduced liquor costs by 28% and improved compliance scores to 100%. The ROI was evident within the first month."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Marcus Rodriguez</div>
                  <div className="text-sm text-gray-600">Owner at Sunset Rooftop Bar</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-gray-500 mt-6">
            Join 1,000+ restaurants already using OpsFlow AI • HACCP compliant • 30-day free trial
          </p>
        </div>
      </section>
    </div>
  )
}
