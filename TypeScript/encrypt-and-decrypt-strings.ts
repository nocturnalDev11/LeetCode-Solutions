class Encrypter {
    private encryptMap: Map<string, string>;
    private decryptMap: Map<string, string[]>;
    private encryptedFrequency: Map<string, number>;

    constructor(keys: string[], values: string[], dictionary: string[]) {
        this.encryptMap = new Map();
        this.decryptMap = new Map();
        this.encryptedFrequency = new Map();

        for (let i = 0; i < keys.length; i++) {
            this.encryptMap.set(keys[i], values[i]);
            if (!this.decryptMap.has(values[i])) {
                this.decryptMap.set(values[i], []);
            }
            this.decryptMap.get(values[i])!.push(keys[i]);
        }

        for (const word of dictionary) {
            const encryptedWord = this.encrypt(word);
            if (encryptedWord !== "") {
                this.encryptedFrequency.set(
                    encryptedWord,
                    (this.encryptedFrequency.get(encryptedWord) || 0) + 1
                );
            }
        }
    }

    encrypt(word1: string): string {
        let encrypted = '';

        for (let char of word1) {
            if (!this.encryptMap.has(char)) return "";
            encrypted += this.encryptMap.get(char);
        }

        return encrypted;
    }

    decrypt(word2: string): number {
        return this.encryptedFrequency.get(word2) || 0;
    }
}
