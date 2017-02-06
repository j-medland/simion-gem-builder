const Entity = require('./lib/entity.js')
const GroupedEntity = require('./lib/entity-grouped.js')
const AppendableEntity = require('./lib/entity-appendable.js')
const Comment = require('./lib/entity-comment.js')
const PaDefine = require('./lib/entity-pa-define.js')
const Geometry = require('./lib/geometry.js')
const gem = require('./lib/index.js')

import test from 'ava'

// Entity
test('Entity: Empty Command', t =>{
  const error = t.throws(()=>{ new Entity() },TypeError)
  t.true(error instanceof TypeError)
})
test('Entity: Renders', t =>{
  t.is(new Entity('TEST').render(),'TEST')
})
test('Entity: Renders with Args', function (t){
  t.is(new Entity('cmd','a','b',1,2).render(),'cmd(a,b,1,2)')
})

// GroupedEntity
test('Grouped: Renders' , t => {
  const grouped = new GroupedEntity()
  grouped.append(new Entity('alpha'))
  grouped.append(new Entity('beta'))
  t.is(grouped.render('@',2),'@@alpha\n@@beta')
})

//AppendableEntity
test('AppendableEntity: Renders', t =>{
  const appendable = new AppendableEntity('Parent')
  appendable.append(new Entity('child 1'))
  appendable.append(new Entity('child 2'))
  t.is(appendable.render('@',1),'@Parent\n@{\n@@child 1\n@@child 2\n@}')
})

// CommentEntity
test('Comment: Empty Comment' ,t => {
  const error =  t.throws( () => { new Comment()},TypeError)
  t.true(error instanceof TypeError)
})
test('Comment: Renders', t =>{
  t.is(new Comment('I am some comment').render(), '; I am some comment')
})

//PaDefine
test('PaDefine: Renders' , t => {
  t.is(new PaDefine(3,3,1,'planar','None','electrostatic',1).render(), 'pa_define(3,3,1,planar,None,electrostatic,1)')
})

//Geometry
test('Geometry: Renders', t=>{
  const geo = new Geometry()
  geo.paDefine(3,3,1,'planar','None','electrostatic',1)
     .include('some-file')
     .comment('some comment')
     .append(new Entity('some-entity'))

  t.is(geo.render(),'pa_define(3,3,1,planar,None,electrostatic,1)\ninclude(some-file)\n; some comment\nsome-entity')
})
