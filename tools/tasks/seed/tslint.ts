import * as gulp from 'gulp'
import * as gulpLoadPlugins from 'gulp-load-plugins'
import { join } from 'path'

import { APP_SRC, CODELYZER_RULES, TOOLS_DIR } from '../../config'
import * as util from 'gulp-util';
const plugins = <any>gulpLoadPlugins()

/**
 * Executes the build process, linting the TypeScript files using `codelyzer`.
 */
export = () => {
  let src = [
    join(APP_SRC, '**/*.ts'),
    '!' + join(APP_SRC, '**/*.d.ts'),
    join(TOOLS_DIR, '**/*.ts'),
    '!' + join(TOOLS_DIR, '**/*.d.ts')
  ]
util.log(plugins)

  return gulp.src(src)
    .pipe(plugins.tslint({
      rulesDirectory: CODELYZER_RULES
    }))
    .pipe(plugins.tslint.report(require('tslint-stylish'), {
      emitError: require('is-ci'),
      sort: true,
      bell: true
    }))
}
