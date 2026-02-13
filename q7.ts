/**
 * Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
 */
export class Stack {
    private stack: string[] = [];

    push(paren: string): void {
        this.stack.push(paren);
    }

    pop(): string | undefined {
        return this.stack.pop();
    }

    peek(): string | undefined {
        return this.stack[this.stack.length - 1];
    }
}

export function printData(data:string){
    return ()=>console.log(data);
}


function validBraces(str:string): Function {
    const stack = new Stack();
    for(let i=0;i<str.length;i++){
        const char = str[i];
        if((char==='(')||(char==='{')||(char==='[')){
            stack.push(char);
        }
        else if((char===')')||(char==='}')||(char===']')){
            const preChar = stack.peek();
            if(preChar && ((preChar==='(' && char===")")||(preChar==='{' && char==="}")||(preChar==='[' && char==="]"))){
                stack.pop();
            }
            else {
                return printData("Invalid string");
            }
        }
    }
    return printData("Valid Parenthesis");
}

validBraces("[({})](]")();