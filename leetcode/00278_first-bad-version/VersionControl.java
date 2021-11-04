import javax.swing.SpinnerDateModel;

public class VersionControl {
    public boolean isBadVersion(int version){
        if (version >= 4) {
            return true;
        } else {
            return false;
        }
    }
}
