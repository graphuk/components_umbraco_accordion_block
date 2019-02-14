using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Skybrud.Umbraco.GridData;
using Skybrud.Umbraco.GridData.Values;

namespace Graph.Components.AccordionBlock
{
	public class GridControlAccordionValue : GridControlValueBase
	{
		public GridControlAccordionItem[] Tabs { get; protected set; }

		public GridControlAccordionValue(GridControl control, JToken obj) : base(control, obj as JObject)
		{
			this.Tabs = new GridControlAccordionItem[0];
			if (obj != null)
			{
				this.Tabs = JsonConvert.DeserializeObject<GridControlAccordionItem[]>(obj.ToString());
			}
		}

		public static GridControlAccordionValue Parse(GridControl control, JToken obj)
		{
			if (obj != null)
				return new GridControlAccordionValue(control, obj);
			return (GridControlAccordionValue) null;
		}
	}
}
