/***
 * idStr      每个节点的唯一值 例如 id  字段名
 * parStr     每个节点的父节点 例如 parentId 字段名
 * childStr   每个节点的子节点所在的数组  例如 children  字段名
 * ***/
function listToTree (list, idStr, parStr, childStr) {
  let treeObj = listToObj(list, idStr, parStr) // 数组转 obj tree
  let resultList = objToList(treeObj) // obj tree 转 数组 tree
  let dataList = []
  resultList.map(item => {
    dataList.push(...item.children)
  })

  return dataList
  // 先将数组 组成obj tree
  function listToObj (list, idStr, parStr) {
    let parObj = {} // 先根据 parStr 将父节点相同的分到一组
    let allIds = [] // 存下所有的idStr
    /**
     * 数据结构
     * {
     *
     *    xIds: [],
     *    xChildren: {}
     * }
     * */
    list.map(item => {
      item.xChildren = {}
      allIds.push(item[idStr])
      if (parObj[item[parStr]]) {
        parObj[item[parStr]].xIds.push(item[idStr])
        parObj[item[parStr]].xChildren[item[idStr]] = item
      } else {
        parObj[item[parStr]] = {
          xIds: [item[idStr]],
          xChildren: {}
        }
        parObj[item[parStr]].xChildren[item[idStr]] = item
      }
    })

    // 然后根据 parStr（父节点） 填充到对应的节点里
    for (let i in parObj) {
      if (allIds.includes(i) || allIds.includes(+i)) { // 代表这个父节点存在于某个节点中
        // 第二次循环 寻找父节点
        for (let j in parObj) {
          if (i !== j) {
            let values = parObj[j].xIds
            if (values.includes(i) || values.includes(+i)) {
              parObj[j].xChildren[i].xChildren = parObj[i].xChildren
            }
          }
        }
      } else { } // 代表是第一级菜单 不做操作
    }

    // 最后去除不是第一节点的属性
    for (let key in parObj) {
      if (allIds.includes(key) || allIds.includes(+key)) {
        delete parObj[key]
      }
    }
    return parObj
  }

  // 再将 obj tree 组成 array tree
  function objToList (treeObj) {
    let list = []
    for (let key in treeObj) {
      let value = treeObj[key]
      if (Object.values(value.xChildren).length) {
        value[childStr] = objToList(value.xChildren)
      }
      delete value.xChildren
      delete value.xIds
      list.push(value)
    }
    return list
  }
}
let demo = [
  {
    id: 1,
    name: '第一级',
    parentId: 0
  },
  {
    id: 11,
    name: '第一级下的第一级',
    parentId: 1
  },
  {
    id: 12,
    name: '第一级下的第二级',
    parentId: 1
  },
  {
    id: 111,
    name: '第一级下的第一级下的第一级',
    parentId: 11
  },
  {
    id: 112,
    name: '第一级下的第一级下的第二级',
    parentId: 11
  },
  {
    id: 121,
    name: '第一级下的第二级下的第一级',
    parentId: 12
  },
  {
    id: 2,
    name: '第二级',
    parentId: 0
  },
  {
    id: 21,
    name: '第二级下的第一级',
    parentId: 2
  },
  {
    id: 22,
    name: '第二级下的第二级',
    parentId: 2
  },
  {
    id: 211,
    name: '第二级下的第一级下的第一级',
    parentId: 21
  },
  {
    id: 212,
    name: '第二级下的第一级下的第二级',
    parentId: 21
  },
  {
    id: 221,
    name: '第二级下的第二级下的第一级',
    parentId: 22
  },
  {
    id: 333,
    name: '其他',
    parentId: 33
  }
]
