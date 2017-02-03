const Entity = require('./lib/entity.js')
const CommentEntity = require('./lib/entity-comment.js')
const AppendableEntity = require('./lib/entity-appendable.js')

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

// CommentEntity
test('Comment: Empty Comment' ,t => {
  const error =  t.throws( () => { new CommentEntity()},TypeError)
  t.true(error instanceof TypeError)
})
test('Comment: Renders', t =>{
  t.is(new CommentEntity('I am some comment').render(), '; I am some comment')
})
