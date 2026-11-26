const port = process.env.PORT;
const secretKey = process.env.CLUB_SECRET_KEY;

const member = {
  name: "Christopher Adu Gyamfi",
  knustIndex: "22221671",
  year: 2,
  status: "ACC Backend Ready",
  port: port,
  secretKeyLoaded: Boolean(secretKey)
};

console.log(JSON.stringify(member, null, 2));