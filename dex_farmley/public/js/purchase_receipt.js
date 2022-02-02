// frappe.ui.form.on("Purchase Receipt", {
//     on_submit:function(frm){
//         if(frm.doc.is_return){
//         frappe.model.get_value('Purchase Receipt', {"return_against":frm.doc.return_against}, 'inter_company_reference',
//   		function(d) {
//         frappe.call({
//             method:"dex_farmley.dexfarmley.custom_purchase_receipt.make_sales_return",
//             args: {"source_doc":d.inter_company_reference},
//             callback: function(r){
                
//             },
//         })
//     })
//     }

//     }
// })