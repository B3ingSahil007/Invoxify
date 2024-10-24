const z = require('zod')

const signUpSchema = z.object({
    firstname: z
        .string({ required_error: "Firstname Is Required" })
        .trim()
        .min(3, { message: "Firstname Must Be At Least 3 Characters." })
        .max(255, { message: "Firstname Must Not More Than 255 Characters." }),

    lastname: z
        .string({ required_error: "Lastname Is Required" })
        .trim()
        .min(3, { message: "Lastname Must Be At Least 3 Characters." })
        .max(255, { message: "Lastname Must Not More Than 255 Characters." }),

    username: z
        .string({ required_error: "Username Is Required" })
        .trim()
        .min(3, { message: "Username Must Be At Least 3 Characters." })
        .max(255, { message: "Username Must Not More Than 255 Characters." }),

    mnumber: z
        .string({ required_error: "Mobile Number Is Required" })
        .trim()
        .min(10, { message: "Mobile Number Must Be At Least 10 Characters." })
        .max(20, { message: "Mobile Number Must Not More Than 20 Characters." }),

    address: z.object({
        street: z
            .string({ required_error: "Street Is Required" })
            .trim()
            .min(2, { message: "Street Must Be At Least 2 Characters." })
            .max(255, { message: "Street Must Not Be More Than 255 Characters." }),

        city: z
            .string({ required_error: "City Is Required" })
            .trim()
            .min(2, { message: "City Must Be At Least 2 Characters." })
            .max(255, { message: "City Must Not Be More Than 255 Characters." }),

        state: z
            .string({ required_error: "State Is Required" })
            .trim()
            .min(2, { message: "State Must Be At Least 2 Characters." })
            .max(255, { message: "State Must Not Be More Than 255 Characters." }),

        zipCode: z
            .string({ required_error: "Zip Code Is Required" })
            .trim()
            .min(2, { message: "Zip Code Must Be At Least 2 Characters." })
            .max(10, { message: "Zip Code Must Not Be More Than 10 Characters." }),

        country: z
            .string({ required_error: "Country Is Required" })
            .trim()
            .min(2, { message: "Country Must Be At Least 2 Characters." })
            .max(255, { message: "Country Must Not Be More Than 255 Characters." })
    }),
    email: z
        .string({ required_error: "E-Mail Is Required" })
        .trim()
        .min(3, { message: "E-Mail Must Be At Least 3 Characters." })
        .email({ message: "Invalid E-Mail Address." })
        .max(255, { message: "E-Mail Must Not More Than 255 Characters." }),

    password: z
        .string({ required_error: "Password Is Required" })
        .trim()
        .min(8, { message: "Password Must Be At Least 8 Characters." })
        .max(1024, { message: "Password Must Not More Than 1024 Characters." }),
})

const loginSchema = z.object({
    email: z
        .string({ required_error: "E-Mail Is Required" })
        .trim()
        .min(3, { message: "E-Mail Must Be At Least 3 Characters." })
        .email({ message: "Invalid E-Mail Address." })
        .max(255, { message: "E-Mail Must Not More Than 255 Characters." }),
    password: z
        .string({ required_error: "Password Is Required" })
        .trim()
        .min(8, { message: "Password Must Be At Least 8 Characters." })
        .max(1024, { message: "Password Must Not More Than 1024 Characters." }),
})

module.exports = { signUpSchema, loginSchema }