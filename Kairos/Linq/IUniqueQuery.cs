namespace Kairos.Linq
{
    public interface IUniqueQuery
    {
        int CountBy(string fieldName, string value);
        object GetByPrimaryKey(params object[] primaryKeys);
    }
}
