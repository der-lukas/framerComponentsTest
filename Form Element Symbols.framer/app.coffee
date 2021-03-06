# testDrive loader
# td = "testDrive.js"
# source = "https://raw.githubusercontent.com/marckrenn/framer-testDrive/master/td.coffee"
# 
# if localStorage.getItem(td)?
# 	eval(localStorage.getItem(td))
# else
# 	Utils.domLoadData source, (err, module) ->
# 		js = CoffeeScript.compile(module, bare: true)
# 		localStorage.setItem(td, js)
# 		location.reload()
# 
# # Load Symbols Module
# testDrive.module "symbols"


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
