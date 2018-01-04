###

In this demo I'm loading the Symbol-Module via Marc Krenns testDrive-snippet (https://github.com/marckrenn/framer-testDrive)

For production use, load the module like this:

1) Download and copy Symbol.coffee in your project's /modules-folder. (https://github.com/der-lukas/framer-Symbols)

2) Require the Symbol-module in your project:
   {Symbol} = require 'Symbol'

###

# testDrive loader
td = "testDrive.js"
source = "https://raw.githubusercontent.com/marckrenn/framer-testDrive/master/td.coffee"

if localStorage.getItem(td)?
	eval(localStorage.getItem(td))
else
	Utils.domLoadData source, (err, module) ->
		js = CoffeeScript.compile(module, bare: true)
		localStorage.setItem(td, js)
		location.reload()

# Load Symbols Module
testDrive.module "symbols"

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

Toggle = new Symbol(toggle_default, toggleStates)

toggle = new Toggle
	parent: togglesContainer
	x: Align.center

toggle.onClick ->
	@.stateCycle()

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

Checkbox = new Symbol(checkbox_default, checkboxStates)

checkbox = new Checkbox
	parent: checkboxContainer
	x: Align.center

checkbox.onClick ->
	@.stateCycle()

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

buttonEvents 

Button = new Symbol(button_default, buttonStates)

button = new Button
	parent: buttonContainer
	x: Align.center

button.label.template = "Submit"

button.onTapStart ->
	@.stateCycle "pressed"

button.onTapEnd ->
	@.stateCycle "default"
