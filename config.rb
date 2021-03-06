# environment = :development or :production

css_dir =   "/assets/themes/material-monker/css"
sass_dir =  "/assets/themes/material-monker/_sass"
images_dir = "images"
generated_images_dir = images_dir + "/generated"
javascripts_dir = "js"

# Options (:expanded, :nested, :compact or :compressed).
output_style = (environment == :development) ? :expanded : :compressed

# Conditionall enable line comments when in development mode.
line_comments = (environment == :development) ? true : false

# Output debugging info in development mode.
sass_options = (environment == :development) ? {:debug_info => true} : {:debug_info => false}
