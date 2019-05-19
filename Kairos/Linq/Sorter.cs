//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Linq.Expressions;

//namespace Kairos.Linq
//{
//    public static class Sorter
//    {
//        private static LambdaExpression CreateExpression(Type type, string propertyName)
//        {
//            var param = Expression.Parameter(type, "x");

//            Expression body = param;
//            foreach (var member in propertyName.Split('.'))
//            {
//                body = Expression.PropertyOrField(body, member);
//            }

//            return Expression.Lambda(body, param);
//        }

//        public static IOrderedQueryable<TSource> SortBy<TSource>(this IQueryable<TSource> query, string sortName, string sortDir)
//        {
//            if (string.IsNullOrWhiteSpace(sortName))
//            {
//                throw new KairosException("Sort name must be defined.");
//            }

//            sortDir = sortDir == "" ? "asc" : sortDir;
//            sortDir = sortDir.ToLower();
//            var acceptableSortDir = new List<string>
//            {
//                 "asc",
//                 "des",
//                 "desc",
//                 "ascending",
//                 "descending"
//            };
//            var isValidSortDir = false;
//            foreach (var item in acceptableSortDir)
//            {
//                if (sortDir == item)
//                {
//                    isValidSortDir = true;
//                    break;
//                }
//            }
//            sortDir = !isValidSortDir ? "asc" : sortDir;

//            var ascending = (sortDir == "asc" || sortDir == "ascending" || sortDir == "a");
 
//            var lambda = (dynamic)CreateExpression(typeof(TSource), sortName);
//            return ascending
//                ? Queryable.OrderBy(query, lambda)
//                : Queryable.OrderByDescending(query, lambda);
//        }
//    }
//}
