package main

import "fmt"
//to test use test@ufl.edu and test
func main() {
	fmt.Println("Welcome to Pack!")
	fmt.Println("Please Enter your email and password") //just make sure email has ufl, later tho
	fmt.Println("Email:")
	var email string
	for {
		fmt.Scanln(&email)
		if email == "test@ufl.edu" {
			break

		} else {
			fmt.Println("Email not found!")
			fmt.Println("Email:")
		}
	}
	fmt.Println("Password:")
	var pass string
	fmt.Scanln(&pass)
	for {
		if pass == "test" {
			break

		} else {
			fmt.Println("Password not valid")
			fmt.Println("Password:")
		}

	}
	fmt.Println("Please choice an option.")
	fmt.Println("1. View Club Hostings")
	fmt.Println("2. Host a club")
	fmt.Println("3. Quit")
	fmt.Print("Enter your choice: ")
	var input int
	fmt.Scanln(&input)

	switch input {
	case "1\n":
		fmt.Println("1. 360BHM") //this is just the mockup i'd rather get these all on a CSV somehow and then this section is just lego lab from prog 2
		fmt.Println("2. 3D Printing club")
		fmt.Println("3. A Reason to Give")
		fmt.Println("4. Adopted Student Organization")
		fmt.Println("5. Advertising Society")
		fmt.Println("6. Adventist Christian Fellowship") 
		fmt.Println("7. 3D Printing club")
		fmt.Println("8. Next Page")
		fmt.Println("Choose a Club you'd like to know more about")
		var menuChoice int
	fmt.Scanln(&menuChoice)
	switch menuChoice{
		case "1\n": fmt.Println("The purpose of the 360BHM is to this series seeks to educate, enhance, and entertain the university and Gainesville communities by reflecting on the contributions that Black Americans have made. It is our goal to advocate exposure of refined enrichment inspired by the heritage and legacy of universal Black culture.")
		//meeting hours here but  we gotta get more info from clubs for that
		//meeting location here too probably
	}

		  //I think we just list a bunch of clubs here and then u can click for further info?
	case "2\n":
		fmt.Println("You selected option 2") //adds to the database of clubs prob just a vector
	case "3\n":
		fmt.Println("Goodbye!")
		return
	default:
		fmt.Println("Invalid choice")


}
