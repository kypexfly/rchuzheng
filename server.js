const fs = require('fs-extra')
const metadataParser = require('markdown-yaml-metadata-parser')

const filenames = fs.readdirSync('./frontend/src/markdown')

let articleArray = []

filenames.forEach((name) => {
  const text = fs.readFileSync(`./frontend/src/markdown/${name}`, 'utf8', (err, data) => data)
  let result = metadataParser(text).metadata
  result['slug'] = name.replace('.md', '')
  articleArray.push(result)
})

// sorting with latest date
articleArray.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
console.log(articleArray)

// console.log(articleArray)
fs.writeFile('./frontend/src/data/mdData.json', JSON.stringify(articleArray, null, 2));


console.log("mdData.json ha sido actualizado exitosamente...")