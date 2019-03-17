using System;

namespace Kairos.Linq
{
    public interface IUniqueQuery : IDisposable
    {
        int CountBy(string fieldName, string value);
        object GetByPrimaryKey(params object[] primaryKeys);
    }
}
