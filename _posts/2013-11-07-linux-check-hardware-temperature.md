---
layout: post
title: "Linux check hardware temperature"
category : post
tagline: ""
tags : [linux, Debian, dell xps l502x]
---
{% include JB/setup %}

How check hardware temperature on Debian 7.2 (and others).

## Install

Install *lm-sensors* and *hddtemp*

{% highlight bash %}
# apt-get install lm-sensors hddtemp
{% endhighlight %}

Run *sensors-detect* to configure *lm-sensors*. Answer yes to all questions.

{% highlight bash %}
$ sensors-detect
...
To load everything that is needed, add this to /etc/modules:
#----cut here----
# Chip drivers
coretemp
#----cut here----
If you have some drivers built into your kernel, the list above will
contain too many modules. Skip the appropriate ones!

Do you want to add these lines automatically to /etc/modules? (yes/NO) yes
Successful!

Monitoring programs won't work until the needed modules are
loaded. You may want to run '/etc/init.d/kmod start'
to load them.

Unloading cpuid... OK
{% endhighlight %}

Follow the steps adding the neccessary files to /etc/modules and running '/etc/init.d/kmod start' to finish the configuration.

## Check temperature

After following sensors-detect steps, you'll be able to check the temperature. Simply run *sensors* on terminal or use programs like *xsensors*.

{% highlight bash %}
# sensors
acpitz-virtual-0
Adapter: Virtual device
temp1:        +64.0°C  (crit = +100.0°C)
temp2:        +64.0°C  (crit = +100.0°C)

coretemp-isa-0000
Adapter: ISA adapter
Physical id 0:  +64.0°C  (high = +86.0°C, crit = +100.0°C)
Core 0:         +61.0°C  (high = +86.0°C, crit = +100.0°C)
Core 1:         +60.0°C  (high = +86.0°C, crit = +100.0°C)
Core 2:         +62.0°C  (high = +86.0°C, crit = +100.0°C)
Core 3:         +61.0°C  (high = +86.0°C, crit = +100.0°C)

nouveau-pci-0100
Adapter: PCI adapter
temp1:        +63.0°C  (high = +100.0°C, crit = +110.0°C)
{% endhighlight %}

## HDD temperature

For disk temperature run *hddtemp*.

{% highlight bash %}
$ hddtemp /dev/sd?
{% endhighlight %}
