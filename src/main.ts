import { sayHello } from "./greet";

function showHello(divId: string, name: string) {
	const $div = $('#' + divId);
    $div.innerText = sayHello(name);
}

showHello("greeting", "TypeScript!");
