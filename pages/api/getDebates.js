import { connectToDatabase } from "../../utils/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const debates = await db
    .collection("debates")
    .find({})
    .limit(20)
    .toArray();
    res.json({
      data:debates,
     status: true,
    });
};