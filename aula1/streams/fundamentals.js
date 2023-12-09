// Streams -> não aceita valores primitivos (string, number, boolean)
// stdin é um stream de leitura
// stdout é um stream de escrita
// process.stdin
//     .pipe(process.stdout);
import {Readable} from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++;
        setTimeout(() => {
            if (i > 100) {
                this.push(null);
            } else {
                const buf = Buffer.from(`${i}\n`, 'utf-8');
                this.push(buf);
            }
        }, 1000)
    }
}

new OneToHundredStream().pipe(process.stdout)