---
title: "Trouble with temperature sensors?"
description: "Reset your connection and verify authentication for temperature monitoring equipment."
---

# Trouble with temperature sensors?

Your sensors connect to the equipment monitoring system through wireless communication. If you're experiencing connectivity issues, this guide will help you troubleshoot and resolve common problems.

## Quick Fixes

{% callout type="success" title="Try These First" %}
1. **Power cycle** - Unplug the sensor for 30 seconds, then reconnect
2. **Check distance** - Ensure sensors are within 50 feet of the base station
3. **Verify power** - Look for the LED indicator light on the sensor
4. **Reset connection** - Press and hold the reset button for 10 seconds
{% /callout %}

## Common Issues

### No Temperature Readings

If your dashboard shows "No Data" or missing temperature readings:

1. **Check Physical Connection**
   ```
   ✓ Power cable firmly connected
   ✓ LED indicator is solid green (not blinking)
   ✓ Sensor probe inserted properly into equipment
   ✓ No physical damage to cables
   ```

2. **Verify Network Connection**
   - Base station should show steady blue light
   - If blinking red: Network connectivity issue
   - If solid red: Sensor communication problem

3. **Test Sensor Range**
   - Maximum range: 50 feet indoors
   - Walls and metal equipment can reduce range
   - Consider relocating base station if needed

### Incorrect Temperature Readings

If temperatures seem wrong or inconsistent:

{% callout type="warning" title="Calibration Check" %}
Sensors should be calibrated every 6 months for HACCP compliance. Contact support to schedule calibration if readings seem inaccurate.
{% /callout %}

1. **Compare with Manual Thermometer**
   - Use a certified reference thermometer
   - Allow 5 minutes for readings to stabilize
   - Acceptable variance: ±1°F (±0.5°C)

2. **Check Probe Placement**
   - Insert probe to manufacturer's specified depth
   - Avoid contact with walls or heating elements
   - Ensure probe tip is in center of product/air space

### Connectivity Drops

If sensors disconnect frequently:

1. **Network Interference**
   - Move away from WiFi routers, microwaves
   - Check for competing 2.4GHz devices
   - Consider upgrading to 5GHz base station

2. **Power Issues**
   - Verify stable power supply
   - Check for loose connections
   - Consider UPS backup for critical sensors

## Reset and Reconnection

### Sensor Reset Process

1. **Locate Reset Button**
   - Small button on sensor housing
   - Usually requires paperclip or small tool

2. **Reset Sequence**
   ```bash
   1. Press and hold reset button (10 seconds)
   2. Release when LED flashes red/green
   3. Wait 30 seconds for boot sequence
   4. LED should turn solid blue when ready
   ```

3. **Re-pair with Base Station**
   - Press pairing button on base station
   - Press reset button on sensor once
   - Wait for solid green LED (paired successfully)

### Base Station Reset

If multiple sensors are having issues:

1. **Factory Reset Base Station**
   ```bash
   1. Unplug power for 60 seconds
   2. Hold reset button while plugging back in
   3. Continue holding for 15 seconds after power on
   4. Release when all LEDs cycle through colors
   ```

2. **Reconfigure Network Settings**
   - Connect to setup WiFi network "OpsFlow-Setup"
   - Navigate to 192.168.4.1 in browser
   - Enter your WiFi credentials
   - Save and restart base station

## Two-Step Authentication

Some sensor models require two-step authentication for security:

### Enable 2FA Protection

1. **In Dashboard Settings**
   - Go to Equipment → Security
   - Enable "Secure Sensor Communication"
   - Generate authentication codes

2. **Pair Sensors with 2FA**
   ```
   Standard pairing → Enter 6-digit code from dashboard
   ```

### Troubleshoot 2FA Issues

{% callout type="error" title="Authentication Failed" %}
If you see "Authentication Failed" errors:

1. **Verify Time Sync** - Ensure dashboard and sensors have correct time
2. **Regenerate Codes** - Create new authentication codes in dashboard  
3. **Clear Cache** - Reset sensor pairing and start fresh
4. **Backup Codes** - Use emergency backup codes if primary fails
{% /callout %}

## HACCP Compliance Notes

### Required Monitoring

- **Continuous monitoring** required for critical control points
- **Immediate alerts** for temperature deviations
- **Automatic logging** for health department records

### Alert Configuration

Set appropriate alert thresholds:

```
Refrigeration: 32-40°F (0-4°C)
Freezers: 0°F (-18°C) or below
Hot holding: 140°F (60°C) or above
Danger zone: 40-140°F (4-60°C) - Immediate alert
```

### Documentation

- All temperature data automatically logged
- Export reports for inspections
- 2-year data retention for compliance

## Professional Installation

{% callout type="info" title="Need Professional Help?" %}
For new installations or persistent issues:

- **Installation service** available in most areas
- **Certified technicians** familiar with restaurant requirements
- **Same-day service** for critical temperature monitoring

[Schedule Installation →](/docs/support/contact)
{% /callout %}

## Contact Support

Still having issues? Our technical support team specializes in restaurant equipment monitoring:

- **24/7 technical support** for temperature monitoring
- **Remote diagnostics** available for most issues
- **Replacement units** shipped same-day when needed

**Support Options:**
- 💬 Live chat with technical specialists
- 📞 Phone support: 1-800-OPSFLOW
- 📧 Email: sensors@opsflow.com

[Get Technical Support →](/docs/support/contact)
