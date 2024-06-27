const { Permit } = require('permitio');


const permit = new Permit({
    pdp: 'http://localhost:7766',
    token: 'permit_key_wGdvfriWxhftozcaQaNd2tB1SuJx1l0VITtj2BdxNjoKsJUmtKhUkscPGDAwCwUj7W6du6LQkop5enlT0zQ3rJ',
});


const checkRole = async (username) => {
    const role = await permit.api.getAssignedRoles(username)
    console.log(role)
    const roles = role.map(record => record.role);
    return roles
}

module.exports = { checkRole }