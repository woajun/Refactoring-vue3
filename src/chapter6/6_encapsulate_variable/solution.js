let defaultOwner = { firstName: "마틴", lastName: "파울러" };

const spaceship = {};

spaceship.owner = defaultOwner;

defaultOwner = { firstName: "레베카", lastName: "파슨스" };

export default spaceship.owner;
