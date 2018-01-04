###

In this demo I'm loading the Symbol-Module via Marc Krenns testDrive-snippet (https://github.com/marckrenn/framer-testDrive)

For production use, load the module like this:

1) Download and copy Symbol.coffee in your project's /modules-folder. (https://github.com/der-lukas/framer-Symbols)

2) Require the Symbol-module in your project:
   {Symbol} = require 'Symbol'

###

# Symbols

#Toggle
toggleStates =
	active:
		template: toggle_active
		animationOptions:
			curve: Spring(damping: 1)
			time: 0.7
	default:
		template: toggle_default
		animationOptions:
			curve: Spring(damping: 1)
			time: 0.7

toggleEvents = 
	"Click": -> @.stateCycle()

Toggle = new Symbol(toggle_default, toggleStates, toggleEvents)

# Checkbox
checkboxStates =
	default:
		template: checkbox_default
		animationOptions:
			curve: Spring(damping: 1)
			time: 0.5
	active:
		template: checkbox_active
		animationOptions:
			curve: Spring(damping: 1)
			time: 0.5

checkboxEvents =
	"Click": -> @.stateCycle()

Checkbox = new Symbol(checkbox_default, checkboxStates, checkboxEvents)

# Button
buttonStates =
	default:
		template: button_default
		animationOptions:
			curve: Spring(damping: 0.5)
			time: 0.5
	pressed:
		template: button_pressed
		animationOptions:
			curve: Spring(damping: 0.5)
			time: 0.5

buttonEvents =
	"TapStart": -> @.stateCycle "pressed"
	"TapEnd": -> @.stateCycle "default"

Button = new Symbol(button_default, buttonStates, buttonEvents)
