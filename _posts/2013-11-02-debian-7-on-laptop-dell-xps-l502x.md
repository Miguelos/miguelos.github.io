---
layout: post
title: "Debian 7 on laptop Dell XPS L502x"
category : post
tagline: "Update kernel"
tags : [linux, debian, dell xps l502x]
---
{% include JB/setup %}

Here I'm writing down all the steps I followed after installing *Debian 7*. I've already installed Ubuntu Server 12 and build up from there. Everything works fine [using ubuntu][UbuntuOnL502x]. However, lets try *Debian 7*!

Debian version: 

{% highlight console %}
$ lsb_release -a
Distributor ID:	Debian
Description:	Debian GNU/Linux 7.2 (wheezy)
Release:	7.2
Codename:	wheezy
{% endhighlight %}

First, after installing Debian, I can feel the heat coming out the CPU. Although it was the same with *Windows 7*, you can [change power settings](http://en.community.dell.com/support-forums/laptop/f/3518/t/19442104.aspx) to lower the fan speed... and stop the noise.

## Update kernel

{% highlight console %}
$ uname -a
Linux dell-xps-l502x 3.2.0-4-amd64 #1 SMP Debian 3.2.51-1 x86_64 GNU/Linux
{% endhighlight %}

There is a problem with the 9-in1 card reader. To enable insert the card and run:

{% highlight console %}
# echo 1 > /sys/bus/pci/rescan
{% endhighlight %}

The kernel version 3.12-rc2 resolve the card reader problem. Bug status: [https://wiki.debian.org/HowToUpgradeKernel](https://wiki.debian.org/HowToUpgradeKernel). Currently this is an experimental version. To install it follow the steps here: [https://wiki.debian.org/HowToUpgradeKernel](https://wiki.debian.org/HowToUpgradeKernel).

I prefer wait and install the backport version.

{% highlight console %}
https://bugzilla.kernel.org/show_bug.cgi?id=40802
{% endhighlight %}

Enable backports to update the kernel. Add repository to /etc/apt/sources.list.

{% highlight console %}
# backports
deb http://ftp.uk.debian.org/debian/ wheezy-backports main 
{% endhighlight %}

Install and restart the laptop.

{% highlight console %}
# apt-get -t wheezy-backports install linux-image-3.10-0.bpo.3-amd64
{% endhighlight %}

Check kernel version.

{% highlight console %}
$ uname -a
Linux UNKNOWN 3.10-0.bpo.3-amd64 #1 SMP Debian 3.10.11-1~bpo70+1 (2013-09-24) x86_64 GNU/Linux
{% endhighlight %}

It works! Restart the laptop. Performance has been improved. You can notice how boot time improves.

### Useful links
- Dell XPS 15 L502X & Ubuntu 12.04 Linux: [http://hanynowsky.wordpress.com/2012/04/07/dell-xps-15-l502x-ubuntu-linux/](http://hanynowsky.wordpress.com/2012/04/07/dell-xps-15-l502x-ubuntu-linux/)
- Ubuntu hardware support Dell XPS 15 L502x [UbuntuOnL502x][UbuntuOnL502x]

### Sources
+ [http://www.debian-administration.org/articles/327](http://www.debian-administration.org/articles/327)

[UbuntuOnL502x]: https://wiki.ubuntu.com/HardwareSupport/Machines/Laptops/Dell/XPS/15
