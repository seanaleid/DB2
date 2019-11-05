

exports.up = function(knex) {
    return knex.schema.table('pets', tbl => {
        tbl.string('owner', 255);
    })
  };
  
exports.down = function(knex) {
return knex.schema.table('pets', tbl => {
    tbl.dropColumn('owner');
})
};
  
