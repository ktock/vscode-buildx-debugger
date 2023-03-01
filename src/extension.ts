'use strict';

import * as vscode from 'vscode';
import { ProviderResult } from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
	vscode.commands.registerCommand('extension.vscode-buildx-debugger.debugEditorContents', (resource: vscode.Uri) => {
	    let targetResource = resource;
	    if (!targetResource && vscode.window.activeTextEditor) {
		targetResource = vscode.window.activeTextEditor.document.uri;
	    }
	    if (targetResource) {
		vscode.debug.startDebugging(undefined, {
		    type: 'dockerfile',
		    name: 'Debug File',
		    request: 'launch',
		    program: targetResource.fsPath,
		    stopOnEntry: true
		});
	    }
	}),
        vscode.commands.registerCommand('extension.vscode-buildx-debugger.getProgramName', config => {
	    return vscode.window.showInputBox({
	        placeHolder: "Please enter the name of a Dockerfile file in the workspace folder",
	        value: "Dockerfile"
	    });
        }),
        vscode.debug.registerDebugAdapterDescriptorFactory('dockerfile', new DebugAdapterExecutableFactory()),
    );
}

export function deactivate() {}

class DebugAdapterExecutableFactory implements vscode.DebugAdapterDescriptorFactory {
	createDebugAdapterDescriptor(_session: vscode.DebugSession, executable: vscode.DebugAdapterExecutable | undefined): ProviderResult<vscode.DebugAdapterDescriptor> {
	    return new vscode.DebugAdapterExecutable("buildx", ["dap"], {
                env: {"BUILDX_EXPERIMENTAL": "1"}
            });
	}
}
