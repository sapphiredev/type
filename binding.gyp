{
	"targets": [
		{
			"target_name": "<(module_name)",
			"sources": [ "lib/type.cc" ],
			"include_dirs": [
				"<!(node -e \"require('nan')\")"
			],
			"product_dir": "<(module_path)",
		}
	]
}
