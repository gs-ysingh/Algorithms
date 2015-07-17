import java.util.*;
import java.math.BigInteger;

class Fact
{
   public static void main(String args[])
   {
      	Scanner in = new Scanner(System.in);
      	int t;
      	BigInteger m;		
		t = in.nextInt(); 
		while(t > 0) {
			m = in.nextBigInteger();			
			System.out.println(fact(m));
			t--;
		}
   }
   static BigInteger fact(BigInteger num) {
        if (num.equals(BigInteger.ONE))
            return BigInteger.ONE;
        else
            return num.multiply(fact(num.subtract(BigInteger.ONE)));
    }	
}