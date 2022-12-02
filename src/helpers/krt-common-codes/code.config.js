import codeConfigDev from './code.config.dev';
import codeConfigProd from './code.config.prod';

let codeConfig =
    process.env.NODE_ENV === 'production' ? codeConfigProd : codeConfigDev;

// common constant
codeConfig.SPACE = '';
codeConfig.BLANK = ' ';
codeConfig.YES = 'Y';
codeConfig.NO = 'N';
codeConfig.RIGHT = 'right';
codeConfig.LEFT = 'left';
codeConfig.WRONG = 'wrong';
codeConfig.ALL = 'all';
codeConfig.COMPLETE = 'complete';
codeConfig.EX_EMPTY = 'ex_empty';
codeConfig.LEARNING = 'learning';
codeConfig.SCHEDULED = 'scheduled';
codeConfig.STUDYING = 'studying';
codeConfig.LOCK = 'lock';
codeConfig.UNLOCK = 'unlock';
codeConfig.ACTIVE = 'active';
codeConfig.PASSIVE = 'passive';
codeConfig.ON = 'on';
codeConfig.OFF = 'off';
codeConfig.ENABLED = 'enabled';
codeConfig.DISABLED = 'disabled';
codeConfig.PAUSE = 'pause';
codeConfig.PRE_GRADING = 'preGrading';
codeConfig.UNIT_RESULT = 'unitResult';
codeConfig.CORRECT = 'correct';
codeConfig.INCORRECT = 'incorrect';
codeConfig.PERFECT = 'perfect';
codeConfig.AUTO = 'auto';
codeConfig.FOCUS = 'focus';

export default codeConfig;
