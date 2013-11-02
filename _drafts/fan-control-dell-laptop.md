 _!_ Temperature it's fine but the laptop continues roaring. When opening big programs the CPU speed increased to more than 2.2 GHz. Unnecessary. When I was using Windows I had to enable the economic mode to avoid this.

Check fan speed

{% highlight bash %}
$ sudo apt-get install fancontrol
[warn   [....] Not starting fancontrol; run pwmconfig first. ... (warning).
{% endhighlight %}

Run *pwmconfig*

{% highlight bash %}
# pwmconfig
# pwmconfig revision 5857 (2010-08-22)
This program will search your sensors for pulse width modulation (pwm)
controls, and test each one to see if it controls a fan on
your motherboard. Note that many motherboards do not have pwm
circuitry installed, even if your sensor chip supports pwm.

We will attempt to briefly stop each fan using the pwm controls.
The program will attempt to restore each fan to full speed
after testing. However, it is ** very important ** that you
physically verify that the fans have been to full speed
after the program has completed.

/usr/sbin/pwmconfig: There are no pwm-capable sensor modules installed
{% endhighlight %}

Run fancontrol

sudo fancontrol


## Control fan speed

{% highlight bash %}
$ sudo apt-get install i8kutils
...
Setting up i8kutils (1.33) ...
[warn] Not starting. Disabled via /etc/default/i8kmon. ... (warning).
[warn] Not starting. Disabled via /etc/default/i8kbuttons. ... (warning).
{% endhighlight %}

Set _ENABLED_ to 1 in both files /etc/default/i8kbuttons and /etc/default/i8kmon.

{% highlight bash %}
# modprobe -v i8k
{% endhighlight %}

To check if ti's loaded run *lsmod*

{% highlight bash %}
$ lsmod
Module                  Size  Used by
...
i8k                    13097  0 
...
{% endhighlight %}

sources 
+ http://www.cyberciti.biz/faq/controlling-dell-fan-speeds-temperature-on-ubuntu-debian-linux/
+ http://www.cyberciti.biz/faq/add-remove-list-linux-kernel-modules/
