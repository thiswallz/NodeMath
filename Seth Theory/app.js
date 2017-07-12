/**
 * 
 * Seth Theory - Math in NodeJS - ECMAScript 6 based
 * 
 */
class Util {
    static console(a, b, out, ...args) {
        console.info("Set a      \t", a);
        console.info("Set b      \t", b);
        console.info("Set %s\t", args[0], out, "\n");
    }

}
///(a ∪ b)
class Union {
    constructor() {
        this.a = new Set(Array.from(Array(6).keys()));
        this.b = new Set(Array.from(Array(10).keys()));
        this.out = new Set([...this.a, ...this.b]);
    }
    toString() {
        Util.console(this.a, this.b, this.out, "(a ∪ b)")
    }
}
new Union().toString();

///(a ∩ b)
class Intersection {
    constructor() {
        this.a = new Set(Array.from(Array(6).keys()));
        this.b = new Set(Array.from(Array(10).keys()));
        this.out = new Set([...this.a].filter(x => this.b.has(x)));
    }
    toString() {
        Util.console(this.a, this.b, this.out, "(a ∩ b)")
    }
}
new Intersection().toString();

/// (a \ b)
class Difference {
    constructor() {
        this.a = new Set(Array.from(Array(15).keys()));
        this.b = new Set(Array.from(Array(10).keys()));
        this.out = new Set([...this.a].filter(x => !this.b.has(x)));
    }
    toString() {
        Util.console(this.a, this.b, this.out, "(a \\ b)")
    }
}
new Difference().toString();
