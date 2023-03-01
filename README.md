# vscode-buildx-debugger experiment

- **This requires patchsets proposed to Docker Buildx**
  - https://github.com/docker/buildx/pull/1656

VS Code extension for interactive debugging of Dockerfile based on Docker Buildx (under proposal).

## Features

- Breakpoints and step execution
- Inspecting steps
- Interactive shell on a step with your own debugigng tools
- Rootless execution

## Requirements

- Docker Buildx
  - patched with https://github.com/docker/buildx/pull/1656

## Extension Settings

In the launch configuration (e.g. `launch.json` on VS Code), the following properties are provided.

- `program` *string* **REQUIRED** : Absolute path to Dockerfile.
- `stopOnEntry` *boolean* : Automatically stop after launch. (default: `true`)
- `target` *string* : Target build stage to build.
- `build-args` *array* : Build-time variables.
- `ssh` *array* : Allow forwarding SSH agent to the build. Format: `default|<id>[=<socket>|<key>[,<key>]]`
- `secrets` *array* : Expose secret value to the build. Format: `id=secretname,src=filepath`
- `root` *string* : Root directory for controller server.
- `controller-mode` *string* : Mode to launch the controller (`local` vs `remote`(default))
- `server-config` *string* : Path to the controller server configuration file.

Common and mandatory properties are the following (see [VS Code documentation](https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes) for details).

- `type` : Type of debugger to use. Must be `dockerfile`.
- `request` : The request type. `launch` is only supported as of now.
- `name` : The reader-friendly name of this configuration.

## Known Issues

- Issue tracker: https://github.com/ktock/vscode-buildx-debugger

## Release Notes

TBD
