import connection from "../connection";

const tableName = "User"
export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(tableName)
      .where({ email });
 
    return result[0];
   }
