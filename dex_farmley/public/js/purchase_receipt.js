frappe.ui.form.on("Purchase Receipt", {
    on_submit:function(frm){
        if(frm.doc.is_return){
        frappe.model.get_value('Purchase Receipt', {"return_against":frm.doc.return_against}, 'inter_company_reference',
  		function(d) {
        frappe.call({
            method:"dex_farmley.dexfarmley.custom_purchase_receipt.make_sales_return",
            args: {"source_doc":d.inter_company_reference},
            callback: function(r){
                
            },
        })
    })
    }

    }
// refresh:function(frm){
//     if (frm.doc.docstatus==1 && frm.doc.is_return==1) {
//         frappe.model.get_value('Purchase Receipt', {"return_against":frm.doc.return_against}, 'inter_company_reference',
//             function(d) {
//             frm.add_custom_button(__('Sales Return'), function() {
//                         frappe.model.open_mapped_doc({
//                             method: "erpnext.stock.doctype.delivery_note.delivery_note.make_sales_return",
//                             args: {"source_doc":d.inter_company_reference},
//                         })
//                     }, __('Create'));
//         })
//     }
// }
})

