using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Discount.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        public string[] myData = { "Apple", "Banana" };

        public string[] getData()
        {
            return myData;
        }
    }
}
