﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HCRepository
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class HealthCareEntities : DbContext
    {
        public HealthCareEntities()
            : base("name=HealthCareEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<ResParty> ResParties { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }
    
        public virtual ObjectResult<getAllPatient_Result> getAllPatient()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<getAllPatient_Result>("getAllPatient");
        }
    }
}
