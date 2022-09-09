import {hash, compare} from 'bcryptjs';

/**
 * It takes a password, hashes it, and returns the hashed password.
 * @param password - The password to hash
 * @returns The password is being hashed and returned.
 */
export async function hashPassword(password){

    return await hash(password, 12)
    
}

export async function compareHashed(password,HashedPassword){
    let isValid = await compare(password, hashPassword)

    return isValid
}