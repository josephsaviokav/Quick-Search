import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "quick-search" is now active!');

	const disposable = vscode.commands.registerCommand('google-search.quickSearch', async () => {
		const val=await vscode.window.showInputBox({prompt:'Enter your preferred search engine (google,bing,edge,brave)'});
		if(val==null){
			return;
		}
		let engine=val.toLowerCase();
		if(engine!=='google' && engine!=='bing' && engine!=='brave'){
			vscode.window.showErrorMessage('Unsupported search engine. Please enter google, bing, or brave.');
			return;
		}
		if(engine==='google'){
			const query = await vscode.window.showInputBox({ prompt: 'Enter your search query' });
		if(query ==null) {
			return;
		}
		const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
		vscode.env.openExternal(vscode.Uri.parse(url));
		}
		else if(engine==='bing'){
			const query = await vscode.window.showInputBox({ prompt: 'Enter your search query' });
		if(query ==null) {
			return;
		}
		const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
		vscode.env.openExternal(vscode.Uri.parse(url));
		}
		// else if(engine==='edge'){
		// const query = await vscode.window.showInputBox({ prompt: 'Enter your search query' });
		// if(query ==null) {
		// 	return;
		// }
		// const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
		// vscode.env.openExternal(vscode.Uri.parse(url));
		// }
		else if(engine==='brave'){
			const query = await vscode.window.showInputBox({ prompt: 'Enter your search query' });
		if(query ==null) {
			return;
		}
		const url = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
		vscode.env.openExternal(vscode.Uri.parse(url));
	}

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
