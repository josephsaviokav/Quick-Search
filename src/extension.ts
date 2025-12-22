import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "google-search" is now active!');

	const disposable = vscode.commands.registerCommand('google-search.googleSearch', async () => {

		const query = await vscode.window.showInputBox({ prompt: 'Enter your Google search query' });
		if(query ==null) {
			return;
		}
		const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
		vscode.env.openExternal(vscode.Uri.parse(url));
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
