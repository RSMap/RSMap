import java.lang.Math;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import java.lang.Thread;

public class Main {


    public static long getDateDiff(Date date1, Date date2, TimeUnit timeUnit) {
        long diffInMillies = date2.getTime() - date1.getTime();
        return timeUnit.convert(diffInMillies,TimeUnit.MILLISECONDS);
    }

    public static void main(String[] args) {
        long timestamp = System.currentTimeMillis();
        long diffInMillies = timestamp - 60000;
        Date tim = new Date(diffInMillies);
        System.out.println(tim.toString());

        CREATE FUNCTION IF NOT EXISTS deltaTime (input bigint)
        CALLED ON NULL INPUT RETURNS bigint
        LANGUAGE java AS '
        long timestamp = System..currentTimeMillis();
        long diffInMillies = timestamp - input;
        return diffInMillies;';

        //System.out.println(t.convert(diffInMillies, TimeUnit.MILLISECONDS));
//        try {
//            Thread.sleep(1000);                 //1000 milliseconds is one second.
//        } catch(InterruptedException ex) {
//            Thread.currentThread().interrupt();
//        }
//        long timestamp2 = System.currentTimeMillis();
//
//        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("mm:ss");
//
//        java.util.Date time=new java.util.Date(60000);
//        java.util.Date time2=new java.util.Date(timestamp);
//        Date d = new Date(getDateDiff(time, time2, TimeUnit.MILLISECONDS));
//        System.out.println(d.toString());
//        long diff = time.getTime() - time2.getTime();
//
//        java.util.Date time3=new java.util.Date(diff);
//
//        System.out.println(time3.toString());
//        System.out.println(timestamp);
//        System.out.println(timestamp2);

    }
}
