#include "iostream"
#include "string"
#include "fstream"
#include "vector"
#include "cstdlib"

//include namespace to avoid std::cout
using namespace std;

int main(int argc, char const *argv[])
{

	//size of interger
	cout << "size of interger" << endl;
	int t = 10;
	cout << sizeof(t) << endl;

	//array declaration
	cout << "array declaration" << endl;
	int a[5] = {1, 2, 3, 4, 5};
	int len = sizeof(a) / sizeof(*a);
	for(int i = 0; i < len; i++) {
		cout << a[i] << endl;
	}


	cout << "rand function" << endl;

	//rand() function generates number between 0 to RAND_MAX
	//If we rand() % n, we get number random number between 0 to n - 1
	//so, rand() % n + 1 gives random number between 1 to n

	int num = rand() % 100 + 1;
	while(num != 100) {
		cout << num << endl;
		num = rand() % 100 + 1;
	}

	//string concatenation
	cout << "string concatenation" << endl;
	char start[5] = {'H', 'e', 'l', 'l', 'o'};
	string end = " World";
	cout << start + end << endl;

	//get input

	cout << "input from console" << endl;
	string name;
	cout << "Enter your name: " << endl;
	getline(cin, name);

	if(name == "Yogesh Singh") {
		cout << "You are correct" << endl;
	}
	else {
		cout << "You are wrong" << endl;
	}

	//string functions - size, empty, append, compare, assign for substring
	//string functions - find to get index of another string
	//insert, erase and replace function


	//vector
	cout << "vector in c++" << endl;
	vector<int> v;

	v.push_back(1);
	v.push_back(2);
	v.push_back(8);
	v.push_back(4);
	v.push_back(5);

	cout << "Before" << endl;
	for (int i = 0; i < v.size(); i++)
	{
		cout << v.at(i) << endl;
	}

	v.erase(v.begin() + 2);
	v.insert(v.begin() + 2, 3);

	cout << "After" << endl;
	for (int i = 0; i < v.size(); i++)
	{
		cout << v.at(i) << endl;
	}	

	//front and back function to get first and last element of vector
	//empty to check if no item in vector
	//pop back to remove the last item
	//v.end() to find the last index of vector

	return 0;
}