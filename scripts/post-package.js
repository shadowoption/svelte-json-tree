import * as fs from 'fs';
import * as path from 'path';
import fse from 'fs-extra';

const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), './package/package.json'), 'utf-8'));
delete pkg.type;

fs.writeFileSync(path.join(process.cwd(), './package/package.json'), JSON.stringify(pkg, null, 2) + '\n', 'utf-8');

try {
    fse.copySync('./package/dist', './dist', { overwrite: true })
    fse.copySync('./package/_', './_', { overwrite: true })
} catch (err) {
    console.error(err)
}
