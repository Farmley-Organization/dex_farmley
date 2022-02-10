frappe.ui.form.on("Purchase Receipt", {
    refresh:function(frm){
        if (frm.doc.is_return==1) {
            frappe.model.get_value('Purchase Receipt', frm.doc.return_against, 'inter_company_reference',
                function(d) {
                    frm.add_custom_button(__('Sales Return'), function() {
                    frappe.call({
                        method:"dex_farmley.dexfarmley.custom_purchase_receipt.make_sales_return",
                        args: {
                            source_name:d.inter_company_reference,
                            name:frm.doc.name
                        },
                        callback: function(r){
                            
                        },
                    })
                }, __('Create'));
                    
            })
        }
    },
    on_submit:function(frm){
        frappe.msgprint("Please Create Sales return through Create Button!!!!!!!")
    },
})

