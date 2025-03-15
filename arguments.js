// console.log(process.argv)
/** 
Terminal:

C:\Users\vijay\Desktop\Projects\learning-nodejs>node arguments.js hello world
[
'C:\\Program Files\\nodejs\\node.exe',
'C:\\Users\\vijay\\Desktop\\Projects\\learning-nodejs\\arguments.js',
'hello',
'world'
]
 * */

console.log(process.argv.slice(2));