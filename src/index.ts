function divmod(n: number, base: number) {
    return [Math.floor(n / base), n % base] as const;
}

export function toFactoradic(n: number): string {
    const components: number[] = [];
    while (n > 0) {
        const base = components.length + 2;
        if (base > 10) {
            throw new Error("Numbers larger than 3628799 are simply illegal");
        }
        const [quotient, remainder] = divmod(n, base);
        n = quotient;
        components.push(remainder);
    }
    return components.reverse().join("");
}

function factorial(i: number): number {
    let result = 1;
    while (i > 1) {
        result *= i;
        i--;
    }
    return result;
}

export function fromFactoradic(n: string): number {
    let sum = 0;
    for (let i = n.length - 1; i >= 0; i--) {
        const base = n.length - i + 1;
        if (base > 10) {
            throw new Error("Numbers larger than 3628799 are simply illegal");
        }
        const d = parseInt(n[i], base);
        if (isNaN(d)) {
            throw new Error(`Invalid input: Digit at position ${i} must be in base ${base}`);
        }
        sum += d * factorial(base - 1);
    }
    return sum;
}
