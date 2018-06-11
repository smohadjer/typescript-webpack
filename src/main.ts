import { sayHello } from "./greet";

function showHello(divId: string, name: string) {
	const $div = $('#' + divId);
    $div.get(0).innerText = sayHello(name);
}

showHello("greeting", "TypeScript!");
