{
	"targets": [
		{
			"target_name": "addon",
			"sources": ["lib/addon.cc"],
			"include_dirs": ["<!(node -e \"require('nan')\")"]
		}
	]
}
