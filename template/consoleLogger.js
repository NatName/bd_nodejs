export default function consoleLogger(type, data) {
  console.log("function---consoleLogger");
    const logMethodName = {
        error : 'error',
        info  : 'info'
    }[type && type.toLowerCase()] || 'debug';
    console.log(logMethodName);
    console[logMethodName](data);
}
