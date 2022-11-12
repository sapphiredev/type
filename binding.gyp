{
	"targets": [
		{
			"target_name": "<(module_name)",
			"sources": ["lib/type.cc"],
			"include_dirs": ["<!(node -e \"require('nan')\")"],
			"product_dir": "<(module_path)",
			# gyp inside node v16 uses -rpath=$ORIGIN/ instead of -rpath=$ORIGIN/lib.target/
			# which fixes a longstanding descreptancy between platforms as documented at https://github.com/nodejs/node-gyp/issues/2233
			# This allows tests to pass for older, still buggy and inconsistent versions of node-gyp (and will be duplicative for npm >= 7 which bundles node-gyp >= v0.6.0)
			"ldflags": ["-Wl,-rpath=\$$ORIGIN/"],
		}
	]
}
